import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVolumeXElement } from '@aracna/icons-feather-web/elements/volume-x-element'

export const IconFeatherVolumeX: ElementComponent<IconFeatherVolumeXElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVolumeXElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-volume-x', IconFeatherVolumeXElement)
