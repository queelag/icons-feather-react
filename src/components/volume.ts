import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVolumeElement } from '@aracna/icons-feather-web/elements/volume-element'

export const IconFeatherVolume: ElementComponent<IconFeatherVolumeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVolumeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-volume', IconFeatherVolumeElement)
