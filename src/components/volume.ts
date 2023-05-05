import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVolumeElement } from '@aracna/icons-feather-web/elements/volume-element.js'

export const IconFeatherVolume: ElementComponent<IconFeatherVolumeElement, IconProps> = createBaseElementComponent<
  IconFeatherVolumeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-volume', IconFeatherVolumeElement)
