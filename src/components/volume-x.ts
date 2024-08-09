import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVolumeXElement } from '@aracna/icons-feather-web/elements/volume-x-element'

export const IconFeatherVolumeX: ElementComponent<IconFeatherVolumeXElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVolumeXElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-volume-x', IconFeatherVolumeXElement)
