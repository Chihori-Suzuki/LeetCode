class Solution {
    public int minPartitions(String n) {
        int max = 0;
        for(int i = 0; i < n.length(); i++) {
            char chr = n.charAt(i);
            int c = Character.getNumericValue(chr);
            if ( c >= max) {
                max = c;
            }
        }
        
        return max;
    }
}