// prismaClient.ts
import { PrismaClient } from '@prisma/client';

// 使用 globalThis 而不是直接修改 global 变量
const prisma = globalThis.prisma || (() => {
    try {
        // 生产环境直接创建 PrismaClient 实例
        if (process.env.NODE_ENV === 'production') {
            return new PrismaClient();
        }

        // 开发环境检查 globalThis 中是否已存在实例
        if (!globalThis.prisma) {
            globalThis.prisma = new PrismaClient();
        }
        return globalThis.prisma;
    } catch (error) {
        console.error('Failed to initialize PrismaClient:', error);
        throw error;
    }
})();

export default prisma;
