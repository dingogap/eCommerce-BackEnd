# eCommerce-BackEnd

1. Added sequelize to code to server.js
2. Added columns to table models
3. Added Category API routes
4. Add Tag API Routes
5. Add Product API Routes
6. App doesn't run correctly when routes & models use camelCase and seeds use snake_case. Changed column names in routes & models to snake_case & app runs
7. Changed Category API Route to use try/async/await
8. Changed Tag API Route to use try/async/await
9. Changed Product API Route to use try/async/await - still have post/put to create
10. It appeared duplicate category_id fields were created in Product - tracked problem down to typo in the Model index.js - valuable lesson: don't make typos because they might be hard to find 
