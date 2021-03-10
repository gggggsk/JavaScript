function removeDups(arr) {
    return [...new Set(arr)]
}
 
       console.log (removeDups(['John', 'Taylor', 'John']));
       console.log  (removeDups(['John', 'Taylor', 'John', 'john'])).toEqual(['John', 'Taylor', 'john']);
       console.log   removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby'])).toEqual(['javascript', 'python', 'ruby', 'c']);
       console.log   removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5])).toEqual([1, 2, 3, 5, 6, 7]);
       console.log  removeDups(['#', '#', '%', '&', '#', '$', '&'])).toEqual(['#', '%', '&', '$']);
       console.log  removeDups([3, 'Apple', 3, 'Orange', 'Apple'])).toEqual([3, 'Apple', 'Orange']);
