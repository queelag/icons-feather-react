import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVolumeElement } from '@aracna/icons-feather-web/elements/volume-element'

export const IconFeatherVolume: ElementComponent<IconFeatherVolumeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVolumeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-volume', IconFeatherVolumeElement)
