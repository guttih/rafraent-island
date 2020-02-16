import mocks from "./../mock"
import { Book } from "./../interfaces/Book";
import { Author } from "./../interfaces/Author";
import { getBooksFromService } from "./../DataFetch/booksDAO";
import Context from "../context";

export default {
  Query: {
    getAuthors: async (parent: any, args: any, context: Context): Promise<any[]> => {
      // if (context.user?.roles?.includes("READ_AUTHORS"))
        return mocks.authors;
      // throw new ForbiddenError("");
    }
  },
  Author: {
    books: async (root: Author, args: any, context: any, info: any): Promise<Book[]> => {     
      // Skoða Dataloader <-- https://www.npmjs.com/package/dataloader
      const books = await getBooksFromService();
      return books.filter(b => b.author.includes(root.id));
    }
  }
}