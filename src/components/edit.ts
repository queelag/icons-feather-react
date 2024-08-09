import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherEditElement } from '@aracna/icons-feather-web/elements/edit-element'

export const IconFeatherEdit: ElementComponent<IconFeatherEditElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEditElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-edit', IconFeatherEditElement)
