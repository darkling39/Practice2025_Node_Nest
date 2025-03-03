import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data });
  }

  async getPosts() {
    return this.prisma.post.findMany({ include: { author: true } });
  }

  async getPostById(id: string) {
    return this.prisma.post.findUnique({ where: { id }, include: { author: true } });
  }

  async updatePost(id: string, data: Prisma.PostUpdateInput) {
    return this.prisma.post.update({ where: { id }, data });
  }

  async deletePost(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
