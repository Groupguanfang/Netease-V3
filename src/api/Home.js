import { get } from "./ajax"

/**
  * 获最新歌曲
  * 
  * @params @returns
  */
export async function newSong() {
  let res = await get('/personalized/newsong')
  return res
}