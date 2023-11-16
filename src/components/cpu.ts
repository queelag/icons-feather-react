import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCpuElement } from '@aracna/icons-feather-web/elements/cpu-element'

export const IconFeatherCpu: ElementComponent<IconFeatherCpuElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCpuElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cpu', IconFeatherCpuElement)
