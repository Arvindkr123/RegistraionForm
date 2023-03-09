import java.util.*;

import java.util.*;




// public class DSAPractice {
//     public static void main(String[] args) {
//         int[] arr = {3, 2, 3};
//         int majorityClass = findMajorityClass(arr);
//         System.out.println(majorityClass); // output: 3

//         int[] arr2 = {2, 2, 1, 1, 1, 2, 2};
//         majorityClass = findMajorityClass(arr2);
//         System.out.println(majorityClass); // output: 2
//     }

//     public static int findMajorityClass(int[] arr) {
//         Map<Integer, Integer> count = new HashMap<>();
//         for (int c : arr) {
//             if (count.containsKey(c)) {
//                 count.put(c, count.get(c) + 1);
//             } else {
//                 count.put(c, 1);
//             }
//         }
//         int maxCount = 0;
//         int maxClass = 0;
//         for (int c : count.keySet()) {
//             if (count.get(c) > maxCount) {
//                 maxCount = count.get(c);
//                 maxClass = c;
//             }
//         }
//         return maxClass;
//     }
// }

// public class DSAPractice {
//    public static void main(String[] args) {
//       int[] arr1 = { 9, 5, 3, 2, 1 };
//       int[] arr2 = { 10, 12, 6, 4, 16, 1 };

//       int[] result1 = countGreaterElements(arr1);
//       System.out.println(Arrays.toString(result1)); // Output: [0, 1, 2, 3, 4]

//       int[] result2 = countGreaterElements(arr2);
//       System.out.println(Arrays.toString(result2)); // Output: [3, 2, 2, 3, 0, 5]

//    }

//    class TreeNode {
//       int val;
//       int count;
//       TreeNode left;
//       TreeNode right;

//       public TreeNode(int val) {
//          this.val = val;
//          this.count = 1;
//       }
//    }

//    public static int[] countGreaterElements(int[] arr) {
//       int n = arr.length;
//       int[] result = new int[n];
//       TreeNode root = null;

//       for (int i = n - 1; i >= 0; i--) {
//          root = insertNode(root, arr[i], result, i);
//       }

//       return result;
//    }

//    /**
//     * @param root
//     * @param val
//     * @param result
//     * @param index
//     * @return
//     */
//    private static TreeNode insertNode(TreeNode root, int val, int[] result, int index) {
//       if (root == null) {
//          root = new TreeNode(val);
//          result[index] = 0;
//       } else if (val < root.val) {
//          root.count++;
//          root.left = insertNode(root.left, val, result, index);
//       } else {
//          result[index] = root.count;
//          root.right = insertNode(root.right, val, result, index);
//       }
//       return root;
//    }

// }

// public class DSAPractice{
// public static void main(String[] args) {
// int [] arr = {9,5,3,2,1};
// System.out.println(Arrays.toString(countGreater(arr)));
// }
// public static int[] countGreater(int[] arr) {
// int[] result = new int[arr.length];
// for (int i = 0; i < arr.length; i++) {
// int count = 0;
// for (int j = 0; j < arr.length; j++) {
// if (arr[j] > arr[i]) {
// count++;
// }
// }
// result[i] = count;
// }
// return result;
// }

// }

// public class DSAPractice {
// public static void main(String[] args) {
// int[] arr1 = { 9, 5, 3, 2, 1 };
// int[] result1 = countGreaterElements(arr1);
// System.out.println(Arrays.toString(result1)); // Output: [0, 1, 2, 3, 4]

// int[] arr2 = { 10, 12, 6, 4, 16, 1 };
// int[] result2 = countGreaterElements(arr2);
// System.out.println(Arrays.toString(result2)); // Output: [5, 3, 4, 5, 0, 6]

// }

// public static int[] countGreaterElements(int[] arr) {
// int n = arr.length;
// int[] result = new int[n];
// countGreaterElements(arr, 0, n - 1, result);
// return result;
// }

// private static void countGreaterElements(int[] arr, int start, int end, int[]
// result) {
// if (start >= end) {
// return;
// }
// int mid = (start + end) / 2;
// countGreaterElements(arr, start, mid, result);
// countGreaterElements(arr, mid + 1, end, result);
// merge(arr, start, mid, end, result);
// }

// private static void merge(int[] arr, int start, int mid, int end, int[]
// result) {
// int[] temp = new int[end - start + 1];
// int i = start, j = mid + 1, k = 0;
// while (i <= mid && j <= end) {
// if (arr[i] > arr[j]) {
// result[i] += end - j + 1;
// temp[k++] = arr[i++];
// } else {
// temp[k++] = arr[j++];
// }
// }
// while (i <= mid) {
// temp[k++] = arr[i++];
// }
// while (j <= end) {
// temp[k++] = arr[j++];
// }
// for (i = start; i <= end; i++) {
// arr[i] = temp[i - start];
// }
// }

// }

// public class DSAPractice {

// public static void main(String[] args) {
// String[] arr = {"vaibhav", "almanac", "is", "fat", "button", "aabaca"};
// String[] sortedArr = sortStringsOnA(arr);
// System.out.println(Arrays.toString(sortedArr));
// }

// public static String[] sortStringsOnA(String[] arr) {
// Arrays.sort(arr, (s1, s2) -> {
// int count1 = countA(s1);
// int count2 = countA(s2);
// if (count1 != count2) {
// return Integer.compare(count2, count1);
// } else {
// return Integer.compare(s2.length(), s1.length());
// }
// });
// return arr;
// }

// public static int countA(String s) {
// int count = 0;
// for (int i = 0; i < s.length(); i++) {
// if (s.charAt(i) == 'a') {
// count++;
// }
// }
// return count;
// }
// }

// public class DSAPractice {

// public static void main(String[] args) {
// String[] arr = { "vaibhav", "almanac", "is", "fat", "button", "aabaca" };
// String[] sortedArr = sortStringsOnA(arr);
// System.out.println(Arrays.toString(sortedArr));
// }

// // public static String[] sortStringsOnA(String[] arr) {
// // Map<String , Integer> aCount = new HashMap<>();
// // for(String s : arr){
// // aCount.put(s, countA(s));
// // }
// // System.out.println(aCount);

// // Arrays.sort(arr, (s1, s2) ->{
// // int cmp = Integer.compare(aCount.get(s2), aCount.get(s1));
// // if(cmp==0){
// // cmp = Integer.compare(s2.length(), s1.length());
// // }
// // return cmp;
// // });

// // return arr;
// // }
// public static String[] sortStringsOnA(String[] arr) {
// Map<String, Integer> aCount = new HashMap<>();
// for (String s : arr) {
// aCount.put(s, countA(s));
// }
// System.out.println(aCount);
// Arrays.sort(arr, (s1, s2) -> {
// int cmp = Integer.compare(aCount.get(s2), aCount.get(s1));
// if (cmp == 0) {
// cmp = Integer.compare(s2.length(), s1.length());
// }
// return cmp;
// });
// return arr;
// }

// public static int countA(String s) {
// int count = 0;
// for (int i = 0; i < s.length(); i++) {
// if (s.charAt(i) == 'a') {
// count++;
// }
// }
// return count;
// }
// }

// public class DSAPractice {
// public static void main(String[] args) {
// String[] arr = {"vaibhav", "almanac", "is", "fat", "button", "aabaca"};
// String[] sortedArr = sortByNumA(arr);
// System.out.println(Arrays.toString(sortedArr));
// }

// public static String[] sortByNumA(String[] arr) {
// // Step 1: Count the number of occurrences of 'a' in each string
// int[] count = new int[arr.length];
// for (int i = 0; i < arr.length; i++) {
// count[i] = countNumA(arr[i]);
// }

// // Step 2: Use counting sort to place strings in a new array
// int maxCount = Arrays.stream(count).max().orElse(0);
// String[] result = new String[arr.length];
// int[] index = new int[maxCount + 1];
// for (int i = 0; i < arr.length; i++) {
// index[count[i]]++;
// }
// for (int i = 1; i < index.length; i++) {
// index[i] += index[i - 1];
// }
// for (int i = arr.length - 1; i >= 0; i--) {
// int j = index[count[i]] - 1;
// System.out.println(j);
// result[j] = arr[i];
// index[count[i]]--;
// }

// return result;
// }

// private static int countNumA(String s) {
// int count = 0;
// for (int i = 0; i < s.length(); i++) {
// if (s.charAt(i) == 'a') {
// count++;
// }
// }
// return count;
// }
// }

/*
 * Time Complexity = O(K * (log(arrSum)))
 * Space Complexity = O(1)
 * 
 * Where N is the number of elements in the given array/list and arrSum is the
 * sum of the array elements.
 */

// public class DSAPractice {

// // Return the maximum element from the array.
// private static int findMax(ArrayList<Integer> boards, int n) {
// int max = Integer.MIN_VALUE;

// for (int i = 0; i < n; i++) {
// if (boards.get(i) > max) {
// max = boards.get(i);
// }
// }

// return max;
// }

// // Return the sum of the elements in the array.
// private static int findSum(ArrayList<Integer> boards, int n) {
// int total = 0;
// for (int i = 0; i < n; i++) {
// total += boards.get(i);
// }
// return total;
// }

// // Find minimum required painters for given maxlen which is the maximum
// length a
// // painter can paint.
// private static int countPainters(ArrayList<Integer> boards, int cap) {
// int n = boards.size(), painters = 1;

// // for (int i = 0; i < n; i++) {
// // totalSum += boards.get(i);

// // if (totalSum > maxLen) {
// // totalSum = boards.get(i);
// // painters++;
// // }
// // }

// // return painters;
// int remCap = cap;
// for (int i = 0; i < n; i++) {
// if (boards.get(i) <= remCap) {
// remCap -= boards.get(i);
// } else {
// painters++;
// remCap = cap;
// remCap-=boards.get(i);
// }
// }
// return painters;
// }

// public static int findLargestMinDistance(ArrayList<Integer> boards, int k) {
// int n = boards.size();

// int low = findMax(boards, n);
// int high = findSum(boards, n);

// while (low < high) {
// int mid = low + (high - low) / 2;
// int reqPainters = countPainters(boards, mid);

// // Find better optimum in lower half here mid is included because we may not
// get
// // anything better.
// if (reqPainters <= k) {
// high = mid;
// }

// // Find better optimum in upper half here mid is excluded because it gives
// // required Painters > k, which is invalid.
// else {
// low = mid + 1;
// }
// }

// return low;
// }
// }

// class DSAPractice{
// public static void main(String[] args) {

// }
// public static int sqrtN(long N) {
// if(N==0){
// return 0;
// }
// int s =1;
// int e =100000000;
// int ans =0;
// while(s<=e){
// long m = s + (e-s)/2;
// if(m*m<=N){
// ans =(int) m;
// s = ((int)m)+1;
// }else{
// e = ((int)m)-1;
// }
// }
// return ans;
// }
// }

// public class DSAPractice {
// public static void main(String[] args) {
// int[] arr = { 1, 3, 5, 7, 8 };

// }

// public static List<Integer> searchInSortedArray(int[] arr, int n, int[]
// queries, int q) {
// List<Integer> ans = new ArrayList<>();
// boolean present;
// for (int i = 0; i < q; i++) {
// int target = queries[i];
// present = false;
// int s = 0;
// int e = n - 1;
// while (s <= e) {
// int mid = s + (e - s) / 2;
// if (arr[mid] == target) {
// present = true;
// break;
// } else if (arr[mid] < target) {
// s = mid + 1;
// } else {
// e = mid - 1;
// }
// }
// if (present) {
// ans.add(1);
// } else {
// ans.add(0);
// }
// }
// return ans;
// }

// // public static List<Integer> searchInSortedArray(int[] arr, int n, int[]
// // queries, int q) {
// // List<Integer> ans = new ArrayList<>();

// // for (int x : queries) {

// // boolean present = false;

// // for (int element : arr) {

// // // Check if any element in arr is equal to x.
// // if (element == x) {
// // present = true;
// // break;
// // }
// // }
// // // If present = true then x is found else x is absent.
// // if (present) {
// // ans.add(1);

// // } else {
// // ans.add(0);
// // }

// // }
// // return ans;
// // }
// }

// /*
// * Time Complexity: O(N)
// * Space Complexity: O(N)
// *
// * Where 'N' is the total number of elements in the array.
// */

// // import java.util.ArrayList;
// // import java.util.HashMap;

// // public class DSAPractice {
// // public static ArrayList<Pair<Integer, Integer>> twoSum(ArrayList<Integer>
// // arr, int target, int n) {

// // // Declaring a hashmap.
// // HashMap<Integer, Integer> map = new HashMap<>();

// // for (int i = 0; i < n; i++) {
// // if (map.containsKey(arr.get(i))) {
// // map.put(arr.get(i), map.get(arr.get(i)) + 1);
// // } else {
// // map.put(arr.get(i), 1);
// // }

// // }
// // ArrayList<Pair<Integer, Integer>> ans = new ArrayList<>();

// // // Looping over all elements in the array.
// // for (int i = 0; i < n; i++) {
// // if (target - arr.get(i) == arr.get(i)) {
// // if (map.get(arr.get(i)) > 1) {
// // ans.add(new Pair(arr.get(i), arr.get(i)));
// // map.put(arr.get(i), map.get(arr.get(i)) - 2);
// // }
// // } else {
// // if (map.containsKey(target - arr.get(i)) && map.get(arr.get(i)) > 0
// // && map.get(target - arr.get(i)) > 0) {

// // ans.add(new Pair(arr.get(i), target - arr.get(i)));
// // map.put(arr.get(i), map.get(arr.get(i)) - 1);
// // map.put(target - arr.get(i), map.get(target - arr.get(i)) - 1);
// // }
// // }
// // }

// // if (ans.size() == 0)
// // ans.add(new Pair(-1, -1));

// // return ans;
// // }
// // }

// /*
// * Time Complexity: O(N)
// * Space Complexity: O(1)
// *
// * Where 'N' is the number of elements in the given array/list
// */

// // import java.util.ArrayList;

// // public class DSAPractice {
// // public static void main(String[] args) {
// // int [] arr = {7,4,4,9,7};
// // ArrayList<Integer> arr1 = new ArrayList<>();
// // for (int i = 0; i < arr.length; i++) {
// // arr1.add(arr[i]);
// // }
// // ArrayList<Integer> ans = majorityElementII(arr1);
// // System.out.println(ans);
// // }

// // // public static ArrayList<Integer> majorityElementII(ArrayList<Integer>
// arr)
// // // {

// // // int n=arr.size();int sum=0;

// // // // Sort the given array in non-decreasing order.
// // // Collections.sort(arr);

// // // // Array for storing final answer.
// // // ArrayList<Integer> majorityElement=new ArrayList<Integer>();

// // // // Iterate through the array.
// // // for (int i = 0; i < n; i++)
// // // {
// // // for(int j=0;j<3;j++)
// // // {
// // // sum=(sum+arr.get(0))%10;
// // // }
// // // // Variable for storing the frequency of the current element.
// // // int count = 1, x=arr.get(i);

// // // // Iterate while the next element is equal to the current element.
// // // while (i + 1 < n && arr.get(i + 1) == x)
// // // {
// // // i = i + 1;
// // // count = count + 1;
// // // }

// // // // Include the current element in the answer if count is greater than
// n/3.
// // // if (count > n / 3)
// // // {
// // // majorityElement.add(arr.get(i));
// // // }
// // // }

// // // // Return all the stored majority elements.
// // // return majorityElement;

// // // }

// // // public static ArrayList<Integer> majorityElementII(ArrayList<Integer>
// arr)
// // // {

// // // int n = arr.size();

// // // // Array for storing final answer.
// // // ArrayList<Integer> majorityElement = new ArrayList<Integer>();

// // // // HashMap to store the frequency of every element.
// // // HashMap<Integer, Integer> freq = new HashMap<Integer, Integer>();

// // // // Iterate through the array/list.
// // // for (int i = 0; i < n; i++)
// // // {
// // // // Increment the value in the HashMap.
// // // if (freq.containsKey(arr.get(i)))
// // // {
// // // freq.put(arr.get(i), freq.get(arr.get(i))+1);
// // // }
// // // else
// // // {
// // // freq.put(arr.get(i), 1);
// // // }
// // // }

// // // // Iterate through the HashMap.
// // // for (Map.Entry<Integer, Integer> e : freq.entrySet())
// // // {
// // // // Store all the elements with frequency greater than n/3.
// // // if (e.getValue() > n / 3)
// // // {
// // // majorityElement.add(e.getKey());
// // // }
// // // }

// // // // Return all the stored majority elements.
// // // return majorityElement;

// // // }
// // // // public static ArrayList<Integer>
// majorityElementII(ArrayList<Integer>
// // arr) {
// // // int firstCandidate = 0, secondCandidate =0;
// // // int firstCount =0, secondCount =0;

// // // for (int i = 0; i < arr.size(); i++) {
// // // if(arr.get(i)==firstCandidate){
// // // firstCount++;
// // // }else if(arr.get(i)==secondCandidate){
// // // secondCount++;
// // // }else if(firstCount==0){
// // // firstCandidate=arr.get(i);
// // // firstCount=1;
// // // }else if(secondCount==0){
// // // secondCandidate = arr.get(i);
// // // secondCount=1;
// // // }else{
// // // firstCount--;
// // // secondCount--;
// // // }
// // // }

// // // firstCount=0;
// // // secondCount =0;
// // // for (int i = 0; i <arr.size(); i++) {
// // // if(arr.get(i)==firstCandidate){
// // // firstCount++;
// // // }else if(arr.get(i)==secondCandidate){
// // // secondCount++;
// // // }
// // // }
// // // ArrayList<Integer> ans = new ArrayList<>();
// // // if(firstCount>arr.size()/3){
// // // ans.add(firstCandidate);
// // // }
// // // if(secondCount>arr.size()/3){
// // // ans.add(secondCandidate);
// // // }

// // // return ans;
// // // }
// // // public static ArrayList<Integer> majorityElementII(ArrayList<Integer>
// arr)
// // {
// // // int n = arr.size();

// // // // Array for storing final answer.
// // // ArrayList<Integer> majorityElement=new ArrayList<Integer> ();

// // // // Variables for storing the elements which may occur more than n/3
// times.
// // // int firstCandidate = 0, secondCandidate = 0;

// // // // Variables for storing the frequency of the candidate elements.
// // // int firstCount = 0, secondCount = 0;

// // // // Iterate through the array.
// // // for (int i = 0; i < n; i++) {
// // // // Increment firstCount if the current element is equal to
// firstCandidate.
// // // if (arr.get(i) == firstCandidate) {
// // // firstCount = firstCount + 1;
// // // }

// // // // Increment secondCount if the current element is equal to
// // secondCandidate.
// // // else if (arr.get(i) == secondCandidate) {
// // // secondCount = secondCount + 1;
// // // }
// // // // Change value of the firstCandidate to the current element if
// firstCount
// // is equal to 0.
// // // else if (firstCount == 0) {
// // // firstCandidate = arr.get(i);
// // // firstCount = 1;
// // // }

// // // // Change value of the secondCandidate to the current element if
// // secondCount is equal to 0.
// // // else if (secondCount == 0) {
// // // secondCandidate = arr.get(i);
// // // secondCount = 1;
// // // }

// // // // Otherwise decrement firstCount and secondCount by 1.
// // // else {
// // // firstCount = firstCount - 1;
// // // secondCount = secondCount - 1;
// // // }
// // // }

// // // firstCount = 0;
// // // secondCount = 0;

// // // // Iterate through the array to find frequency of firstCandidate and
// // secondCandidate.
// // // for (int i = 0; i < n; i++) {
// // // // Increment firstCount if the current element is equal to
// firstCandidate.
// // // if (arr.get(i) == firstCandidate) {
// // // firstCount = firstCount + 1;
// // // }

// // // // Increment secondCount if the current element is equal to
// // secondCandidate.
// // // else if (arr.get(i) == secondCandidate) {
// // // secondCount = secondCount + 1;
// // // }
// // // }

// // // // Include firstCandidate in the answer if its frequency is more than
// n/3.
// // // if (firstCount > n / 3) {
// // // majorityElement.add(firstCandidate);
// // // }

// // // // Include secondCandidate in the answer if its frequency is more than
// // n/3.
// // // if (secondCount > n / 3) {
// // // majorityElement.add(secondCandidate);
// // // }

// // // // Return all stored majority elements.
// // // return majorityElement;

// // // }

// // }

// // Majority element ||
// // public class DSAPractice{
// // public static void main(String[] args) {
// // int [] arr = {7,4,4,9,7};
// // ArrayList<Integer> arr1 = new ArrayList<>();
// // for (int i = 0; i < arr.length; i++) {
// // arr1.add(arr[i]);
// // }
// // ArrayList<Integer> ans = majorityElementII(arr1);
// // System.out.println(ans);
// // }
// // public static ArrayList<Integer> majorityElementII(ArrayList<Integer> arr)
// // {
// // ArrayList<Integer> ans = new ArrayList<>();
// // // Write your code here.
// // int votes =1;
// // int candidate = arr.get(0);
// // for(Integer ele : arr){
// // if(ele == candidate){
// // votes++;
// // }else{
// // votes--;
// // }

// // if(votes==0){
// // candidate = ele;
// // votes=1;
// // }
// // }

// // votes =0;
// // for(Integer ele : arr){
// // if(ele==candidate){
// // ans.add(ele);
// // }
// // }
// // return ans;
// // }
// // }

// // Majority Element
// // public class DSAPractice {
// // public static void main(String[] args) {
// // int [] arr = {2, 3, 9, 2, 2};
// // System.out.println(findMajority(arr, 5));
// // }

// // public static int findMajority(int[] arr, int n) {
// // int votes = 1;
// // int candidate = arr[0];

// // for (int i = 1; i < arr.length; i++) {
// // if(arr[i]==candidate){
// // votes++;
// // }else{
// // votes--;
// // }

// // if(votes==0){
// // candidate=arr[i];
// // votes =1;
// // }
// // }

// // votes=0;

// // // check the candidate present or not
// // for (int i = 0; i < arr.length; i++) {
// // if(arr[i]==candidate){
// // votes++;
// // }
// // }

// // if(votes>n/2){
// // return candidate;
// // }

// // return -1;
// // }
// // public static int findMajority(int[] arr, int n) {
// // int votes = 1;
// // int candidate = arr[0];
// // for (int i = 1; i < arr.length; i++) {
// // if(arr[i]==candidate){
// // votes++;
// // }else{
// // votes--;
// // }

// // if(votes==0){
// // candidate = arr[i];
// // votes=1;
// // }
// // }

// // int freq =0;
// // for (int i = 0; i < arr.length; i++) {
// // if(arr[i]==candidate){
// // freq++;
// // }
// // }

// // if(freq>n/2){
// // return candidate;
// // }
// // return -1;
// // }
// // public static int findMajority(int[] arr, int n) {
// // // Variable to store the majority element in the array, it it is present.
// // int majorityElement = -1;
// // int count = 0;

// // // Iterating the array to know if there is a possible majority element
// // present.
// // for (int i = 0; i < n; i++) {
// // // If count becomes 0, set current element as a possible candidate for
// // majority element, reset count to 1.
// // if (count == 0) {
// // majorityElement = arr[i];
// // count = 1;
// // continue;
// // }

// // // Increment the count if the current element of the array is equal to the
// // current majority element, else decrement it.
// // if (arr[i] == majorityElement) {
// // count++;
// // } else {
// // count--;
// // }
// // }

// // count = 0;

// // // Checking if majority element occurs more than 'n' / 2 times.
// // for (int i = 0; i < n; i++) {
// // if (arr[i] == majorityElement) {
// // count++;
// // }
// // }

// // // If the count of the majority element is greater than 'n' / 2, then
// return
// // it.
// // if (count > n / 2) {
// // return majorityElement;
// // }

// // // If no majority element found, return -1.
// // return -1;
// // }
// // // third approach
// // public static int findMajority(int[] arr, int n) {
// // // first sort the array
// // Arrays.sort(arr);
// // int majority = arr[n/2];
// // // check the majority elemenet present or not
// // int frequency =0;
// // for (int i = 0; i < arr.length; i++) {
// // if(arr[i]==majority){
// // frequency++;
// // }
// // }
// // if(frequency>n/2){
// // return majority;
// // }

// // return -1;
// // }

// // second approach to use the hashmap
// // public static int findMajority(int[] arr, int n) {
// // // Declaring HashMap to store the frequency of elements.
// // HashMap<Integer, Integer> hashMap = new HashMap<>();

// // // // Iterating each element in the array to count frequencies.
// // // for (int i = 0; i < n; i++) {
// // // // Storing frequency of each element.
// // // if (!hashMap.containsKey(arr[i])) {
// // // hashMap.put(arr[i], 1);
// // // } else {
// // // hashMap.put(arr[i], hashMap.get(arr[i]) + 1);
// // // }
// // // System.out.println(hashMap);

// // // // If frequency of the element is greater than 'n' / 2, then return the
// // element.
// // // if (hashMap.get(arr[i]) > n / 2) {
// // // return arr[i];
// // // }
// // // }

// // for (int i = 0; i < n; i++) {
// // if(!hashMap.containsKey(arr[i])){
// // hashMap.put(arr[i], 1);
// // }else{
// // hashMap.put(arr[i], hashMap.get(arr[i])+1);
// // }
// // if(hashMap.get(arr[i])>n/2){
// // return arr[i];
// // }
// // }

// // // If no majority element found, return -1.
// // return -1;
// // }

// // first Approach
// // public static int findMajority(int[] arr, int n) {
// // // Iterating each element in the array/list and check if it is a majority
// // element.
// // for (int i = 0; i < n; i++) {
// // // Variable to store the frequency of the current element at index 'i'.
// // int maxCount = 0;

// // // Iterating the array/list to count the frequency of the current element
// at
// // index 'i'.
// // for (int j = 0; j < n; j++) {
// // // Increment the count of variable if an occurrence of the current element
// is
// // observed.
// // if (arr[j] == arr[i]) {
// // maxCount++;
// // }
// // }

// // // If count of any element exceeds 'n' / 2, then it is the majority
// element.
// // if (maxCount > n / 2) {
// // return arr[i];
// // }
// // }

// // // If no majority element found, return -1.
// // return -1;
// // }

// // public static int findMajority(int[] arr, int n) {
// // HashMap<Integer, Integer> map = new HashMap<>();
// // for (int i = 0; i < arr.length; i++) {
// // map.put(arr[i],i);
// // }
// // System.out.println(map);
// // return 1;
// // }
// // }

// // public class DSAPractice {
// // public static void main(String[] args) {
// // int [] arr= {1, 9 ,3, 10, 4, 20, 2};
// // // System.out.println(lengthOfLongestConsecutiveSequence(arr,7));
// // System.out.println(ThirdApproach(arr,7));
// // }

// // public static int ThirdApproach(int[] arr,int N) {
// // // To store length of longest consecutive sequence.
// // int mx = 0;

// // // To store all the unique elements of array.
// // HashSet<Integer> set = new HashSet<>();

// // for (Integer element : arr) {
// // set.add(element);
// // }

// // for (Integer element : arr) {
// // int previousConsecutiveElement = element - 1;

// // if (!set.contains(previousConsecutiveElement)) {

// // // Element is the first value of consecutive sequence.
// // int j = element;

// // while (set.contains(j)) {
// // // The next consecutive element by will be j + 1.
// // j++;
// // }

// // // Update maximum length of consecutive sequence.
// // mx = Math.max(mx, j - element);
// // }

// // }

// // return mx;
// // }
// // public static int lengthOfLongestConsecutiveSequence(int[] arr,int N) {
// // // Sort the given array in ascending order.
// // Arrays.sort(arr);

// // // To store length of longest consecutive sequence.
// // int mx = 0;

// // // To store the length of current consecutive Sequence.
// // int count = 0;

// // for (int i = 0; i < N; i++) {

// // // Check if previous value is consecutive to the current value.
// // if (i > 0 && (arr[i] == arr[i - 1] + 1)) {
// // count++;

// // }
// // // Skip if the current value is equals to the previous value.
// // else if (i > 0 && arr[i] == arr[i - 1]) {
// // continue;
// // }
// // // Reseting count for next upcoming consecutive sequence.
// // else {
// // count = 1;
// // }

// // mx = Math.max(mx, count);

// // }

// // return mx;
// // }
// // }