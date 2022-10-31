

export class NewsItem{
    title: string;
    dateTime: string;
    imageUrl: string;
    paragraph: string;
    
    constructor(
        title?: string,
        dateTime?: string,
        imageUrl?: string,
        paragraph?: string,
   
     
  
    ) {
        this.title = title ?? '';
        this.dateTime = dateTime ?? '';
        this.imageUrl = imageUrl ?? '';
        this.paragraph = paragraph ?? '';
       
        
    }
}