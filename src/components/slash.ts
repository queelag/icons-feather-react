import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSlashElement } from '@aracna/icons-feather-web/elements/slash-element'

export const IconFeatherSlash: ElementComponent<IconFeatherSlashElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSlashElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-slash', IconFeatherSlashElement)
