import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVolume1Element } from '@aracna/icons-feather-web/elements/volume-1-element.js'

export const IconFeatherVolume1: ElementComponent<IconFeatherVolume1Element, IconProps> = createBaseElementComponent<
  IconFeatherVolume1Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-volume-1', IconFeatherVolume1Element)
