
/**
 * @param {number[][]} grid
 * @return {number}
 * 807. Max Increase to Keep City Skyline
 */
 var findMax = function(array,n){
    var maxx = -1000000
    
    for(var i=0;i<n;i++){
        if(array[i]>maxx){
            maxx = array[i]
        }
    }
    return maxx
}
var maxIncreaseKeepingSkyline = function(grid) {
    var rowMax = []
    var colMax = []
    var height = grid.length
    var width = grid[0].length
    for(var i=0;i<height;i++){
        rowMax[i] = findMax(grid[i],width)
    }
    for(var j=0;j<width;j++){
        var p =0
        var array = []
        while(p<height){
            array.push(grid[p][j])
            p++
        }
        colMax[j] = findMax(array,height)
    }
    var count = 0
    for(i=0;i<height;i++){
        for(j=0;j<height;j++){
            count += Math.min(rowMax[i],colMax[j])-grid[i][j]
        }
    }
    return count
};
