import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCpuElement } from '@aracna/icons-feather-web/elements/cpu-element.js'

export const IconFeatherCpu: ElementComponent<IconFeatherCpuElement, IconProps> = createBaseElementComponent<
  IconFeatherCpuElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cpu', IconFeatherCpuElement)
