export class DatabaseMemory {
#videos = new Map()

list(){
return this.#videos.values()
}
create(video){
const videoId = randomUUID()
//UUID - Internacional Unique Id
this.videos = set(videoId,video)
}

update(id,video){
this.#videos = set(id,video)
}

delete(id){
this.#videos = delete(id)
}


}