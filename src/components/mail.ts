import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMailElement } from '@aracna/icons-feather-web/elements/mail-element'

export const IconFeatherMail: ElementComponent<IconFeatherMailElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMailElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-mail', IconFeatherMailElement)
