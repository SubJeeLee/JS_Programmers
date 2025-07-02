function solution(genres, plays) {
    const genrePlaySum = {};
    for (let i = 0; i < genres.length; i++) {
        const g = genres[i], p = plays[i];
        genrePlaySum[g] = (genrePlaySum[g] || 0) + p;
    }
    const songs = genres.map((g, i) => ({
    genre: g,
    play: plays[i],
    index: i
  }));
    
    console.log(genrePlaySum, songs);
    
    const sortedGenres = Object.keys(genrePlaySum).sort((a, b) => genrePlaySum[b] - genrePlaySum[a]);

    const result = [];
    for (const genre of sortedGenres) {
        const candidates = songs.filter(s => s.genre === genre)
        .sort((a, b) => b.play - a.play || a.index - b.index);
        
        result.push(candidates[0].index);
        if (candidates.length > 1) {
            result.push(candidates[1].index);
        }
    }
    
    return result;
}
