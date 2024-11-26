import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nhatquang123:nhatquang123@atlascluster.lym53tq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1); // Dừng ứng dụng nếu không thể kết nối database
    }
};
