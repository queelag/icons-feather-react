import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTwitterElement } from '@aracna/icons-feather-web/elements/twitter-element'

export const IconFeatherTwitter: ElementComponent<IconFeatherTwitterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTwitterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-twitter', IconFeatherTwitterElement)
