async function test() {
    const baseUrl = 'http://localhost:5000/api/products';

    console.log('1. Testing Add Product...');
    try {
        const addRes = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Test Script Product',
                price: 10.99,
                category: 'Test',
                stock: 100,
                imageUrl: 'http://example.com/img.jpg'
            })
        });
        console.log(`Add Status: ${addRes.status}`);
        const addData = await addRes.json();
        console.log('Add Response:', JSON.stringify(addData, null, 2));

        if (addRes.ok && addData._id) {
            const id = addData._id;
            console.log(`\n2. Testing Update Real Product (${id})...`);
            const updateRes = await fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Updated Product',
                    price: 20.99,
                    category: 'Test',
                    stock: 50,
                    imageUrl: 'http://example.com/img2.jpg'
                })
            });
            console.log(`Update Status: ${updateRes.status}`);
            const updateData = await updateRes.json();
            console.log('Update Response:', JSON.stringify(updateData, null, 2));
        }
    } catch (e) {
        console.error('Add/Update Failed:', e);
    }

    console.log('\n3. Testing Update Mock Product (ID: "1")...');
    try {
        const mockRes = await fetch(`${baseUrl}/1`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stock: 5 })
        });
        console.log(`Mock Update Status: ${mockRes.status}`);
        const mockText = await mockRes.text();
        console.log('Mock Update Response (truncated):', mockText.substring(0, 200));
    } catch (e) {
        console.error('Mock Update Failed:', e);
    }
}

test();
