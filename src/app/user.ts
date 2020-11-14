export class User {
    constructor(
        public html_url: any,
        public name:any,
        public login:string,
        public avatar_url:any,
        public public_repos:number,
        public created_at:Date,
        public followers: number,
        public following: number,
    ){}
}