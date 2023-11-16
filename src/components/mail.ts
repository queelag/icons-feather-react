import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMailElement } from '@aracna/icons-feather-web/elements/mail-element'

export const IconFeatherMail: ElementComponent<IconFeatherMailElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMailElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-mail', IconFeatherMailElement)
