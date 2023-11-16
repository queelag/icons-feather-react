import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDatabaseElement } from '@aracna/icons-feather-web/elements/database-element'

export const IconFeatherDatabase: ElementComponent<IconFeatherDatabaseElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDatabaseElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-database', IconFeatherDatabaseElement)
