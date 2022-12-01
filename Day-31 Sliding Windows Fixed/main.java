public static boolean closeDuplicates(int[] nums, int k) {
        HashSet<Integer> window = new HashSet<>(); // Cur window of size <= k
        int L = 0;

        for (int R = 0; R < nums.length; R++) {
            if (R - L + 1 > k) {
                window.remove(nums[L]);
                L++;
            }
            if (window.contains(nums[R])) {
                return true;
            }
            window.add(nums[R]);
        }
        return false;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 24, 67, 4, 2, 3, 3 };
        System.out.println(closeDuplicates(nums, 2));
    }
}