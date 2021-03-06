# Levenshtein Distance

> [维基百科](https://en.wikipedia.org/wiki/Levenshtein_distance)

## 作用

计算两个字符串转换所需要的最少编辑次数，属于 [Edit Distance 算法](https://en.wikipedia.org/wiki/Edit_distance) 的其中一种算法。

注意，其也可以计算两个文本之间的相似度

## 原理

-   假设我们有两个字符串，一个为 link, 另一个为 linkx。
-   那么他们可以生成一个这样的初始矩阵：

|     |     | l   | i   | n   | k   |
| :-- | --- | --- | --- | --- | --- |
|     | 0   | 1   | 2   | 3   | 4   |
| l   | 1   | .   |     |     |     |
| i   | 2   |     |     |     |     |
| n   | 3   |     |     |     |     |
| k   | 4   |     |     |     |     |
| x   | 5   |     |     |     |     |

-   那么 . 所在位置的标记的值可以通过以下操作来完成生成：

    ```js
    // 假设 . 所在的位置为 (x, y), 存储矩阵为 M
    // 字符串 link 为 v_str， 字符串 linkx 为 h_str
    let min = Math.min(M[x][y - 1] + 1, M[x - 1][y] + 1);
    min = Math.min(
        min,
        v_str[y] === h_str[x] ? M[x - 1][y - 1] + 0 : M[x - 1][y - 1] + 1,
    );
    M[x][y] = min;
    ```

-   那么我们更新 . 所在位置的标记的值, 则如下所示：

|     |     | l   | i   | n   | k   |
| :-- | --- | --- | --- | --- | --- |
|     | 0   | 1   | 2   | 3   | 4   |
| l   | 1   | 0   |     |     |     |
| i   | 2   |     |     |     |     |
| n   | 3   |     |     |     |     |
| k   | 4   |     |     |     |     |
| x   | 5   |     |     |     |     |

-   重复此类操作，我们便可以得到一个这样的矩阵：

|     |     | l   | i   | n   | k   |
| :-- | --- | --- | --- | --- | --- |
|     | 0   | 1   | 2   | 3   | 4   |
| l   | 1   | 0   | 1   | 2   | 3   |
| i   | 2   | 1   | 0   | 1   | 2   |
| n   | 3   | 2   | 1   | 0   | 1   |
| k   | 4   | 3   | 2   | 1   | 0   |
| x   | 5   | 4   | 3   | 2   | 1   |

-   那么整个矩阵的的最后则是有 link 转换为 linkx，所需的步骤。
-   同时这个文本的相似度可以通过该公式获得：

    ```js
    const rate =
        1 -
        M[(v_str.length, h_str.length)] / Math.max(v_str.length, h_str.length);
    ```

## 代码

```js
// 待实现
```
