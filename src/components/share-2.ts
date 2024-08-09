import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShare2Element } from '@aracna/icons-feather-web/elements/share-2-element'

export const IconFeatherShare2: ElementComponent<IconFeatherShare2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShare2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-share-2', IconFeatherShare2Element)
