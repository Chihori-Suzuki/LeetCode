class Solution {
    func readBinaryWatch(_ num: Int) -> [String] {
        var times = [String]()
        readBinaryWatchHelper(num, time: 0, min: 0, times: &times)
        return times
    }

func readBinaryWatchHelper(_ num: Int, time: Double, min: Double, times: inout [String]) {
    if num == 0 {
        let strMin = String(format: "%02d", Int(min))
        
        if time < 12 && min < 60 {
            times.append("\(Int(time)):\(strMin)" )
        }
//        print(times)
    } else {
        for i in 0...9 {
            for j in 0...1 {
                if (j == 1) {
                    if (i < 4) {
                        readBinaryWatchHelper(num - 1, time: time + pow(2, Double(i)), min: min, times: &times)
                    } else {
                        readBinaryWatchHelper(num - 1, time: time, min: min + pow(2, Double(i - 4)), times: &times)
                    }
                }
            }
        }
    }
//    pow(2, Double(num))
//    return times
}
}