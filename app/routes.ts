import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    
    index("routes/dashboard.tsx"),
   
    route('test','routes/test.tsx'),
    route("test-2",'routes/test-2.tsx'),
    route("test-3","routes/test-3.tsx"),
    route('order-details','routes/order-details.tsx'),
    route('orders','routes/orders.tsx'),
    route("products","routes/products.tsx"),
    route('settings','routes/settings.tsx'),
    route("add-product","routes/add-product.tsx"),
    route("edit-product","routes/edit-product.tsx")

  


] satisfies RouteConfig;
