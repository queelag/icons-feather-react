import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherInstagramElement } from '@aracna/icons-feather-web/elements/instagram-element'

export const IconFeatherInstagram: ElementComponent<IconFeatherInstagramElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherInstagramElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-instagram', IconFeatherInstagramElement)
