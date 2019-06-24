import { Controller, Route, Get, Post, BodyProp, Put, Delete } from 'tsoa';
import { Author, authorModel} from './author';

@Route('/authors')
export class authorController extends Controller{
    @Get()
    public async getAllAuthors(): Promise<Author>{
        let authors: any;
        try{
        authors = await authorModel.find({});
        console.log(`The authors are ${authors}`);
        authors.map( (author: any) => ({ _id: author._id, name: author.name, created: author.created }));
        return authors;
        }
        catch(err){
            return err;
        }
    }

    @Post()
    public async createAuthor(@BodyProp() authName: string): Promise<Author>{
        try{
            const authorItem = new authorModel({name: authName});
            return await authorItem.save();
        }
        catch(err){
            console.log(err);
            return err;
}
}
}
