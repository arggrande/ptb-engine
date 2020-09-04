import { PostModel } from '../models/PostModel'

const baseEndpoint = process.env.REACT_APP_ENDPOINT || ''

if(baseEndpoint === ''){
    console.error('bad endpoint')
}

export const getAllPosts = async(): Promise<PostModel[]> => {

    let response: PostModel[] = await fetch(`${baseEndpoint}/posts`)
        .then((res: Response) => res.json());

    return response;
           
}

export const sortDate = (first: PostModel, second: PostModel): number => {
    return second.date.getTime() - first.date.getTime();
}

export const addPost = (model: PostModel) => {

}

export const getPostByTitle = (titleKey: string) : PostModel | undefined => {
    return {
         id: 92383,
        titleKey: '',
        title: '',
        body: 'lol',
        date: new Date(2020,1,1)
    }
}