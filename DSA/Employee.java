package DSA;

import java.util.Arrays;
import java.util.Comparator;

public class Employee {
    private String name;
    private int salary;

    public Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public int getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        return name + ": " + salary;
    }

    public static Employee[] sort_array(Employee arr[], int length) {
        // Sorting the array in descending order of salary using bubble sort
        for (int i = 0; i < length - 1; i++) {
            for (int j = 0; j < length - i - 1; j++) {
                if (arr[j].getSalary() < arr[j + 1].getSalary()) {
                    Employee temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        // Returning the sorted array
        return arr;
    }

    // public static void main(String[] args) {
    // Employee[] employees = {
    // new Employee("Babu Rao", 150),
    // new Employee("Raju", 160),
    // new Employee("Shyam", 140),
    // new Employee("Pappu", 200)
    // };

    // Arrays.sort(employees,
    // Comparator.comparingInt(Employee::getSalary).reversed());

    // System.out.println(Arrays.toString(employees));
    // }

    public static void main(String[] args) {
        Employee[] employees = {
                new Employee("Babu Rao", 150),
                new Employee("Raju", 160),
                new Employee("Shyam", 140),
                new Employee("Pappu", 200)
        };
        int length = employees.length;

        // Sorting the array
        employees = sort_array(employees, length);

        // Printing the sorted array
        for (Employee emp : employees) {
            System.out.println(emp);
        }
    }

}
