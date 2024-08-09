import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVolume2Element } from '@aracna/icons-feather-web/elements/volume-2-element'

export const IconFeatherVolume2: ElementComponent<IconFeatherVolume2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVolume2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-volume-2', IconFeatherVolume2Element)
