import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCpuElement } from '@aracna/icons-feather-web/elements/cpu-element'

export const IconFeatherCpu: ElementComponent<IconFeatherCpuElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCpuElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cpu', IconFeatherCpuElement)
