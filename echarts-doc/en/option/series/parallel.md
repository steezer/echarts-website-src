
{{target: series-parallel}}

# series.parallel(Object)

The series in parallel coordinate system.

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}


## type(string) = 'parallel'

{{use: partial-component-id(prefix="#")}}

{{use: partial-coord-sys(
    seriesType="parallel",
    coordSysDefault="'parallel'",
    parallel=true
)}}


{{ use: partial-series-name }}


{{use: partial-parallel-line-style(prefix="#")}}


## inactiveOpacity(number) = 0.05

When perform brush selection, the unselected lines will be set as this transparency rate (which could darken those lines).

## activeOpacity(number) = 1

When perform brush selection, the selected lines will be set as this transparency rate (which could highlight those lines).


## realtime(boolean) = true

Whether to update view in realtime.

## smooth(boolean|number) = false

Whether to smooth the line. It defaults to be `false` and can be set as `true` or the values from 0 to 1 which indicating the smoothness.


{{ use:partial-progressive(
    prefix='#',
    supportProgressiveChunkMode=true,
    defaultProgressive=500
) }}


## data(Array)

{{use: partial-parallel-data-example}}

### name(string)

The name of a data item.

### value(Array)

The value of a data item.

{{use: partial-parallel-line-style(prefix="##")}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="parallel"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear',
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}



{{target: partial-parallel-line-style}}

#${prefix} lineStyle(Object)

Line style.
{{use:partial-line-style(
    prefix="##",
    defaultWidth=2,
    defaultOpacity=0.45
)}}

#${prefix} emphasis(Object)

##${prefix} lineStyle(Object)

{{use:partial-line-style(
    prefix="##" + ${prefix},
    defaultWidth=2,
    defaultOpacity=0.45
)}}



