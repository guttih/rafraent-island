import mocks from "./../mock"
import { Book } from "./../interfaces/Book";
import { Author } from "./../interfaces/Author";
import { getBooksFromService } from "./../DataFetch/booksDAO";
import Context from "../context";

export default {
  Query: {
    getBooks: async (parent: any, args: any, context: Context, info: any): Promise<any[]> => {
      return getBooksFromService();
    }
  },
  Book: {
    // We do not need to implement the id since it is a field on the Book object
    id: async (book: Book, args: any, context: Context, info: any): Promise<string> => {
      return book.id;
    },

    author: async (book: Book, args: any, context: Context, info: any): Promise<Author[]> => {
      
      const author = mocks.authors.filter(a => book.author.includes(a.id));
      return author;
    }
  }
}