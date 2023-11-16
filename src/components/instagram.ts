import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherInstagramElement } from '@aracna/icons-feather-web/elements/instagram-element'

export const IconFeatherInstagram: ElementComponent<IconFeatherInstagramElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherInstagramElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-instagram', IconFeatherInstagramElement)
