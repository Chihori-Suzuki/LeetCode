class Solution {
    func twoCitySchedCost(_ costs: [[Int]]) -> Int {
        var minCost = 0

        for cost in costs {
            if cost[0] >= cost[1] {
                minCost += cost[1]
            } else {
                minCost += cost[0]
            }
        }
        return minCost
    }
    
}