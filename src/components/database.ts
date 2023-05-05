import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDatabaseElement } from '@aracna/icons-feather-web/elements/database-element.js'

export const IconFeatherDatabase: ElementComponent<IconFeatherDatabaseElement, IconProps> = createBaseElementComponent<
  IconFeatherDatabaseElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-database', IconFeatherDatabaseElement)
