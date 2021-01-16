{{target: component-aria}}

# aria

W3C defined the Accessible Rich Internet Applications Suite ([WAI-ARIA](https://www.w3.org/WAI/intro/aria)) to make Web content and Web applications more accessible to the disabled. From ECharts 4.0, we support ARIA by generating description for charts automatically.

By default, ARIA is disabled. To enable it, you should set [aria.show](~aria.show) to be `true`. After enabling, it will generate descriptions based on charts, series, data, and so on. Users may change the generated description.

**For example:**

For config:

```js
option = {
    aria: {
        show: true
    },
    title: {
        text: 'Source of user access to a site',
        x: 'center'
    },
    series: [
        {
             Name: 'access source',
            type: 'pie',
            data: [
                { value: 335, name: 'direct access' },
                { value: 310, name: 'mail marketing' },
                { value: 234, name: 'union ad' },
                { value: 135, name: 'video ad' },
                { value: 1548, name: 'search engine' }
            ]
        }
    ]
};
```

~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)

There should be an `aria-label` attribute on the chart DOM, which can help the disabled understand the content of charts with the help of certain devices. The value of the label is:

```
This is a chart of "Source of user access to a site." The chart type is a pie chart that indicates the source of the visit. The data is - direct access data is 335, mail marketing data is 310, union ad data is 234, video ad data is 135, search engine data is 1548.
```

The default language is in Chinese, but you can configure it with templates. The following document shows how to do it.


## show(boolean) = false

Whether to enable ARIA. When enabled, there should be an `aria-label` label.

## description(string) = null

By default, the description is generated by our algorithm based on charts. If user wants to set their own description, `description` should be set to the whole description.

This is useful when single data values cannot represent what the chart means. For example, if the chart is a map containing many scatter points. Default description can only show the data, but the users may find it hard to interpret. In this case, `description` should be set to describe the meaning of chart.


## general(Object)

General description of chart.

### withTitle(string) = 'This is a chart about "{title}".'

If [title.text](~title.text) exists, then this is used. Template variable:

- `{title}`: will be replaced by [title.text](~title.text).

### withoutTitle(string) = 'This is a chart'

If [title.text](~title.text) does not exist, then this is used.


## series(Object)

Series-related configures.

### maxCount(number) = 10

Maximum series number.

### single(Object)

Description used when there is only one chart.

#### prefix(string) = ''

General description for all series. This displays before all series descriptions. Template variable:

- `{seriesCount}`: will be replaced by series count, which is 1.

#### withName(string) = 'The chart type is {seriesType}, which means {seriesName}. '

If chart contains `name` attribute, then this is used. Template variable:

- `{seriesName}`: will be replaced by the series `name`;
- `{seriesType}`: will be replaced by the series type name.

#### withoutName(string) = 'The chart type is {seriesType}.'

If chart doesn't contain `name` attribute, then this is used. Template variable:

- `{seriesType}`: will be replaced by series type name.


### multiple(Object)

Description used when there are more than one chart.

#### prefix(string) =  'It consists of {seriesCount} chart series. '

General description for all series. This displays before all series descriptions. Template variable:

- `{seriesCount}`: will be replaced by series count.

#### withName(string) = 'The chart type is {seriesType}, which means {seriesName}. '

If series contains `name` attribute, then this is used. Template variable:

- `{seriesName}`: will be replaced by series `name`;
- `{seriesType}`: will be replaced by series type name.

#### withoutName(string) = 'The chart type is {seriesType}.'

If series doesn't contain `name` attribute, then this is used. Template variable:

- `{seriesType}`: will be replaced by series type name.

#### separator(Object)

Separators between series and series.

##### middle(string) = '；'

Separators other than the last one.

##### end(string) = '.'

The last series seperator.




## data(Object)

Data-related configures.

### maxCount(number) = 10

Maximum data number.

### allData(string) = 'Its data is --'

Description used when all data is displayed. Note that this option will **not** set to display all data. If all data should be displayed, [aria.data.maxCount](~aria.data.maxCount) should be set to be `Number.MAX_VALUE`.

### partialData(string) = ''Where the first {displayCnt} entry is -''

Description used when only part of data is displayed. Template variable:

- `{displayCnt}`: number of data displayed.

### withName(string) = '{name}'s data is {value}'

If data contains `name` attribute, then this is used. Template variable:

- `{name}`: will be replaced by data `name`;
- `{value}`: will be replaced by data value.

### withoutName(string) = '{value}'

If data doesn't contain `name` attribute, then this is used. Template variable:

- `{value}`: will be replaced by data value.

### separator(Object)

Separators between data and data.

#### middle(string) = '，'

Separators other than the last one.

#### end(string) = ''

The last data separator.

Note that since series `separator.end` is used after the last data, `data.separator.end` is not needed in most cases.