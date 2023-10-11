import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShare2Element } from '@aracna/icons-feather-web/elements/share-2-element'

export const IconFeatherShare2: ElementComponent<IconFeatherShare2Element, IconProps> = createBaseElementComponent<
  IconFeatherShare2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-share-2', IconFeatherShare2Element)
