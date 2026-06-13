import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Dashboard
    index("routes/dashboard.tsx"),
    // Test
    route('test', 'routes/test.tsx'),
    route("test-2", 'routes/test-2.tsx'),
    route("test-3", "routes/test-3.tsx"),

    // Orders
    route('orders', 'routes/orders.tsx'),
    route('order-details/:id', 'routes/order-details.tsx'),

    // Products
    route("products", "routes/products.tsx"),
    route("add-product", "routes/add-product.tsx"),
    route("edit-product/:id", "routes/edit-product.tsx"),

    // Customers
    route("customers","routes/customers.tsx"),
    route("add-customer","routes/add-customer.tsx"),
    route("customer-details/:id","routes/customer-details.tsx"),



    // Settings
    route('settings', 'routes/settings.tsx'),






] satisfies RouteConfig;
