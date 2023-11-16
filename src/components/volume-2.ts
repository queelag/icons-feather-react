import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVolume2Element } from '@aracna/icons-feather-web/elements/volume-2-element'

export const IconFeatherVolume2: ElementComponent<IconFeatherVolume2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVolume2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-volume-2', IconFeatherVolume2Element)
