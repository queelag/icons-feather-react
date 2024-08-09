import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVolume1Element } from '@aracna/icons-feather-web/elements/volume-1-element'

export const IconFeatherVolume1: ElementComponent<IconFeatherVolume1Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVolume1Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-volume-1', IconFeatherVolume1Element)
