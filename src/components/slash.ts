import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSlashElement } from '@aracna/icons-feather-web/elements/slash-element'

export const IconFeatherSlash: ElementComponent<IconFeatherSlashElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSlashElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-slash', IconFeatherSlashElement)
